async function checkTonTransaction() {
    const url = `https://tonapi.io/v1/blockchain/getAccountTransactions?account=${walletAddress}`;
    
    const response = await fetch(url);
    const data = await response.json();

    for (let tx of data.transactions) {
        if (tx.in_msg.value === "1000000") {
            console.log("✅ Found transaction!");
        }
    }
}

checkTonTransaction();
