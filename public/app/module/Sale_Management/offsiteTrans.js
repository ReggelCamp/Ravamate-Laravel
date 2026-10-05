import TableLoader from "../../helper/TableLoader.js";
import DatePicker from "../../helper/datePicker.js";
import "../../helper/exportDataTable.js";

const offSiteTransColumns = [
    {
        title: "Transaction ID",
        data: "trans_id"
    },
    {
        title: "Salesman",
        data: "salesman_name"
    },
    {
        title: "Customer",
        data: null,
        render:function(row){
            const transaction = row.salesman_store;
            let store = [];
            transaction.forEach(details => {
                store = details.store_name;
            });
            return store;
        }
    },
    {
        title: "Total Amount",
        data: null,
        render:function(row){
            const transaction = row.salesman_transaction;
            let getDetails = 0;
            transaction.forEach(details => {
                const transactionDetails = details.transaction_details;
                transactionDetails.forEach(details => {
                    getDetails += (details.quantity * details.current_price);
                });
            });
            return getDetails;
        }
    },
    {
        title: "Geo Location",
        data: "geo_location"
    },
    {
        title: "Geo Locking",
        data: "geo_locking"
    },
    {
        title: "Notation",
        data: "notation"
    },
    {
        title: "Transaction Date",
        data: "trans_date"
    },
];

function displayTable(){
    TableLoader.loadTable({
        url:"salesman/getSalesmanWithTransaction",
        tableId:"#offsiteTransTable",
        columns:offSiteTransColumns,

        onSuccess: (data) => {
            getOffSiteTransction(data);
        },
    });
    
}

displayTable();

$(document).ready(function () {
    DatePicker.init();
});

// function getOffSiteTransction(data){
    
// }

// function haversineDistanceKm(lat1, lng1, lat2, lng2) {
//     const R = 6371;

//     const toRadians = (degrees) => (degrees * Math.PI) / 180;

//     const dLat = toRadians(lat2 - lat1);
//     const dLng = toRadians(lng2 - lng1);

//     const a =
//         Math.sin(dLat / 2) ** 2 +
//         Math.cos(toRadians(lat1)) *
//             Math.cos(toRadians(lat2)) *
//             Math.sin(dLng / 2) ** 2;

//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     return R * c;
// }

// function calculateTransactionToStoreDistance(transactions, salesman) {
//     let insideCount = 0;
//     let outsideCount = 0;

//     transactions.forEach((transaction, index) => {
//         const store = transaction.transaction_store;

//         if (!store || store.latitude == null || store.longitude == null) {
//             console.log(
//                 `Transaction ${index + 1}: No store coordinates`,
//                 store,
//             );
//             outsideCount++;
//             return;
//         }

//         const distanceKm = haversineDistanceKm(
//             Number(transaction.latitude),
//             Number(transaction.longitude),
//             Number(store.latitude),
//             Number(store.longitude),
//         );

//         const distanceMeters = distanceKm * 1000;
//         const radiusMeters = Number(salesman.geo_locking);

//         const isInside = distanceMeters <= radiusMeters;

//         if (isInside) {
//             insideCount++;
//         } else {
//             outsideCount++;
//         }
//     });

//     return {
//         total: transactions.length,
//         insideCount,
//         outsideCount,
//     };
// }

// function calculateTransactionDistances(transactions) {
//     console.log("feq", transactions);
//     if (!Array.isArray(transactions)) return;

//     transactions.forEach((transaction, index) => {
//         const currentStore = transaction.transaction_store;

//         // Marker 1 has no previous marker
//         if (index === 0) {
//             transaction.distance_km = 0;
//             transaction.distance_travel = "0 km";
//             return;
//         }

//         const previousTransaction = transactions[index - 1];
//         const previousStore = previousTransaction?.transaction_store;

//         if (
//             !previousStore ||
//             !currentStore ||
//             previousStore.latitude == null ||
//             previousStore.longitude == null ||
//             currentStore.latitude == null ||
//             currentStore.longitude == null
//         ) {
//             transaction.distance_km = null;
//             transaction.distance_travel = "N/A";
//             return;
//         }

//         const previousLat = Number(previousStore.latitude);
//         const previousLng = Number(previousStore.longitude);
//         const currentLat = Number(currentStore.latitude);
//         const currentLng = Number(currentStore.longitude);

//         if (
//             !Number.isFinite(previousLat) ||
//             !Number.isFinite(previousLng) ||
//             !Number.isFinite(currentLat) ||
//             !Number.isFinite(currentLng)
//         ) {
//             transaction.distance_km = null;
//             transaction.distance_travel = "N/A";
//             return;
//         }

//         const distanceKm = haversineDistanceKm(
//             previousLat,
//             previousLng,
//             currentLat,
//             currentLng,
//         );

//         transaction.distance_km = distanceKm;
//         transaction.distance_travel = `${distanceKm.toFixed(2)} km`;

//         console.log(`Marker ${index} → Marker ${index + 1}`, {
//             from: previousStore.store_name,
//             to: currentStore.store_name,
//             distance: `${distanceKm.toFixed(2)} km`,
//         });
//     });
// }