<div class="w-[300px] h-[300px] overflow-y-auto flex flex-col">
    <div class="flex w-full justify-evenly">
        <button type="button" data-tab="transaction" class="tab-btn border-b text-[10px]"> Transaction Details </button>
        <button type="button" data-tab="transaction" class="tab-btn border-b text-[10px]"> Items Details </button>
        <button type="button" data-tab="transaction" class="tab-btn border-b text-[10px]"> Supporting Docs </button>
    </div>

    <div class="flex-col flex">
        <span>Salesman Name</span>
        <span>OB03_NINO LAURENTE (CD00022) - 🔋 45%</span>
    </div>

    <div class="flex-col flex">
        <span>TransactionID:</span>
        <span>Transaction ID: FPM_4202608270853497</span>
    </div>

    <p>
        Sales: ${salesman.sales ?? "-"}
    </p>
</div>