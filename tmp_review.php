<?php
$ctx = stream_context_create(['http' => ['timeout' => 15, 'ignore_errors' => true]]);
echo "== /transaction/getSoPendingSalesman ==\n";
echo file_get_contents('http://127.0.0.1:8000/transaction/getSoPendingSalesman', false, $ctx), PHP_EOL;
echo "== /transaction/syncTransaction?transaction_ids=5 (control: valid id) ==\n";
echo file_get_contents('http://127.0.0.1:8000/transaction/syncTransaction?transaction_ids=99999', false, $ctx), PHP_EOL;