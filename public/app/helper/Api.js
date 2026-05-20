export default class Api {
    static request({url, type, contentType, processData, serverSide, headers, data, args, response, onProgress}) {
        url = url ?? ``;
        type = type ?? `GET`;
        contentType = contentType ?? `application/json`;
        processData = processData ?? true;
        serverSide = serverSide ?? true;
        headers = headers ?? { 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content };
        data = data ?? ``;
        args = args ?? {};

        if (onProgress) {
            args.xhr = () => {
                let xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener('progress', event => {
                    if (event.lengthComputable) {
                        let percent = Math.round((event.loaded / event.total) * 100);
                            
                        onProgress({ loaded: event.loaded, total: event.total, percent });
                    }
                });
                return xhr;
            };
        }

        $.ajax({
            url, type, contentType, processData, serverSide, headers, data, ...args,
            success: function (json) {
                if(response) response({
                    success: true,
                    data: json
                });
            },
            error: function (xhr) {
                if(response) response ({
                    success: false,
                    data: xhr
                });
            },
        });
    }

    static service(data){
        Api.request({
            ...data,
            url: data.url,
            response: (response) => {
                if (response.success) {
                    if (data.onSuccess) data.onSuccess(response.data);
                } 
                else {
                    if (data.onError) data.onError(response.data);
                }
                if (data.onComplete) data.onComplete(response);
            },
        });
    }

    static get(data){
        Api.service(data);
    }

    static post(data){
        Api.service({ ...data, type: 'POST' });
    }

    static put(data){
        Api.service({ ...data, type: 'PUT' });
    }

    static delete(data){
        Api.service({ ...data, type: 'DELETE' });
    }
}