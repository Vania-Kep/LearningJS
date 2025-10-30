import { formatter, calculateInvestmentResults } from "../util/investment";

export default function Results({data}) {
    const results = calculateInvestmentResults(data);
    let totalInterest = 0;
    let investedCapital = 0;

    return (
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {
                    results.map(itm=> {
                        totalInterest += itm.interest;
                        investedCapital = data.initialInvestment + (itm.year * data.annualInvestment);

                        return (
                            <tr key={itm.year}>
                                <td>{itm.year}</td>
                                <td>{formatter.format(itm.valueEndOfYear)}</td>
                                <td>{formatter.format(itm.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(investedCapital)}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}