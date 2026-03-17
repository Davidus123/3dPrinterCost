document.getElementById("calculateBtn").addEventListener("click", function() {
    // קבלת ערכים
    let H = parseFloat(document.getElementById("hours").value) || 0;
    let M = parseFloat(document.getElementById("minutes").value) || 0;
    let filamentPrice = parseFloat(document.getElementById("filamentPrice").value) || 0;
    let filamentAmount = parseFloat(document.getElementById("filamentAmount").value) || 0;
    let electricityPrice = parseFloat(document.getElementById("electricityPrice").value) || 0;
    let profitPercent = parseFloat(document.getElementById("profitPercent").value) || 0;

    // חישוב עלות בסיסית
    let time = H + M/60;
    let priceForElectricity = (electricityPrice / 350) * time;
    let priceForFilament = (filamentPrice / 1000) * filamentAmount;
    let priceForBlay = (time / 150) * 50;
    let totalCost = priceForElectricity + priceForFilament + priceForBlay;

    // חישוב מחיר למכירה
    let sellingPrice = totalCost * (1 + profitPercent / 100);

    // פונקציה לפורמט יפה
    const formatILS = (num) => `₪ ${num.toFixed(4)}`;

    // הצגת תוצאות
    document.getElementById("totalPrice").innerText = `Total Cost: ${formatILS(totalCost)}`;
    document.getElementById("sellingPrice").innerText = `Selling Price: ${formatILS(sellingPrice)}`;
    document.getElementById("blayPrice").innerText = `Blay Cost: ${formatILS(priceForBlay)}`;
    document.getElementById("plasticPrice").innerText = `Filament Cost: ${formatILS(priceForFilament)}`;
    document.getElementById("electricityCost").innerText = `Electricity Cost: ${formatILS(priceForElectricity)}`;

    // הצגת התוצאה
    document.getElementById("results").style.display = "block";
});
