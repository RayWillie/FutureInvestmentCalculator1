// Raymond Williams - CST 2309 final

function calculateFutureValue() {    
    const principal = parseFloat(document.getElementById('principal').value);
    const mthlyInvestment = parseFloat(document.getElementById('investment').value);
    const annualRate = parseFloat(document.getElementById('rate').value);
    const years = parseFloat(document.getElementById('years').value);

    if ( isNaN(principal) || isNaN(mthlyInvestment) || isNaN(annualRate) || isNaN(years) || principal < 0 || mthlyInvestment < 0 || annualRate <= 0 || years <= 0) {
        document.getElementById('result').innerText = "Please enter valid input values";
        return;
    }

    
    const mthlyRate = annualRate / 12 / 100; // calculate monthly intterest
    const totalMonths = years * 12; // convert years to months

        // re-pose the formula to fit monthly calculations
    const futureValueFromPrincipal = principal * Math.pow(1 + mthlyRate, totalMonths);
    const futureValueFromInvestments =  mthlyInvestment *((Math.pow(1+mthlyRate, totalMonths)- 1)/mthlyRate); //transpose the formula

    // check the calculation of these values 
    console.log(futureValueFromInvestments, futureValueFromPrincipal)

    // add  principal and investment amounts
    const totalFutureValue = futureValueFromPrincipal + futureValueFromInvestments;

    document.getElementById('result').textContent = `Future Investment Value is: $${totalFutureValue.toFixed(2)}`;

}
