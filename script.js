document.getElementById("calculateBtn").addEventListener("click", function() {
    // קבלת ערכים
    let H = parseFloat(document.getElementById("hours").value) || 0;
    let M = parseFloat(document.getElementById("minutes").value) || 0;
    let filamentPrice = parseFloat(document.getElementById("filamentPrice").value) || 0;
    let filamentAmount = parseFloat(document.getElementById("filamentAmount").value) || 0;
    let electricityPrice = parseFloat(document.getElementById("electricityPrice").value) || 0;

    // חישוב
    let time = H + M/60;
    let priceForElectricity = (electricityPrice / 350) * time;
    let priceForFilament = (filamentPrice / 1000) * filamentAmount;
    let priceForBlay = (time / 150) * 50;
    let totalPrice = priceForElectricity + priceForFilament + priceForBlay;

    // הצגת תוצאות
    document.getElementById("totalPrice").innerText = `Total Price: ${totalPrice.toFixed(2)} $`;
    document.getElementById("blayPrice").innerText = `Blay Cost: ${priceForBlay.toFixed(2)} $`;
    document.getElementById("plasticPrice").innerText = `Filament Cost: ${priceForFilament.toFixed(2)} $`;
    document.getElementById("electricityCost").innerText = `Electricity Cost: ${priceForElectricity.toFixed(2)} $`;

    document.getElementById("results").style.display = "block";
});