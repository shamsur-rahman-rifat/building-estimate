function calculateCost() {
    const area = document.getElementById("area").value;
    const floors = document.getElementById("floors").value;
    const quality = document.getElementById("quality").value;

    // Validate user input
    if (!area || !floors || isNaN(area) || isNaN(floors) || area <= 0 || floors <= 0) {
        alert("Please enter valid positive numbers for the built-up area and number of floors.");
        return;
    }

    const totalArea = area * floors;

    // Set base cost and labor cost per square foot based on construction quality
    let baseCostPerSqFt;
    let laborCostPerSqFt;

    if (quality === "Basic") {
        baseCostPerSqFt = 1600;
        laborCostPerSqFt = 300;
    } else if (quality === "Medium") {
        baseCostPerSqFt = 1800;
        laborCostPerSqFt = 400;
    } else if (quality === "Premium") {
        baseCostPerSqFt = 2000;
        laborCostPerSqFt = 500;
    } else {
        alert("Please select a valid construction quality.");
        return;
    }

    const baseTotalCost = totalArea * baseCostPerSqFt;

    const cementPercentage = 16.4;
    const sandPercentage = 12.3;
    const aggregatePercentage = 7.4;
    const steelPercentage = 24.6;
    const finishersPercentage = 16.5;
    const fittingsPercentage = 22.8;

    const cementCost = (baseTotalCost * cementPercentage / 100)
    const sandCost = (baseTotalCost * sandPercentage / 100)
    const aggregateCost = (baseTotalCost * aggregatePercentage / 100)
    const steelCost = (baseTotalCost * steelPercentage / 100)
    const finishersCost = (baseTotalCost * finishersPercentage / 100)
    const fittingsCost = (baseTotalCost * fittingsPercentage / 100)

    const totalMaterialCost = cementCost + sandCost + aggregateCost + steelCost + finishersCost + fittingsCost;

    // Total Construction Cost
    const totalEstimate = totalMaterialCost+ totalArea * laborCostPerSqFt;

    // Additional Costs
    const architecturalFee = 150000;
    const governmentPermits = 10000;
    const soilTestingCost = 15000;   
    const waterElectricityCost = 10000;  
    const landscapingCost = 30000;   
    const furnitureCost = 50000;     
    const insuranceCost = 100000;
    const securityCost = 20000;      

    // Final Total Project Cost Estimate
    const additionalCosts = architecturalFee + governmentPermits + soilTestingCost + waterElectricityCost + landscapingCost + furnitureCost + insuranceCost + securityCost;

    const finalEstimate = totalEstimate + additionalCosts;

    // Time Calculation
    const timeForDesignApproval = 45; // Fixed
    const timeForExcavation = 15; // Fixed
    const timeForFoundation = 40; // Fixed
    const timeForRoofSlab = 30 * floors; // Multiplied by floors
    const timeForRCCWork = 15 * floors; // Multiplied by floors
    const timeForBrickworkPlastering = 7 * floors; // Multiplied by floors
    const timeForFlooringTiling = 15 * floors; // Multiplied by floors
    const timeForElectricWiring = 14 * floors; // Multiplied by floors
    const timeForPlumbing = 18 * floors; // Multiplied by floors
    const timeForDoors = 15 * floors; // Multiplied by floors

    const totalConstructionTime = timeForDesignApproval + timeForExcavation + timeForFoundation + timeForRCCWork + timeForRoofSlab + timeForBrickworkPlastering + timeForFlooringTiling + timeForElectricWiring + timeForPlumbing + timeForDoors;


    // Output Results
    document.getElementById("result").innerHTML = `
        <h2>Construction Cost (Estimated)</h2><br>
        <p><strong>Total Built-up Area:</strong> ${totalArea.toLocaleString()} sq. ft.</p>
        <p><strong>Total Construction Cost:</strong> ${finalEstimate.toLocaleString()} BDT</p>
        <p><strong>Total Material Cost:</strong> ${(totalMaterialCost).toLocaleString()} BDT</p>
        <p><strong>Total Labour Cost:</strong> ${(laborCostPerSqFt * totalArea).toLocaleString()} BDT</p>
        <p><strong>Total Additional Cost:</strong> ${(additionalCosts).toLocaleString()} BDT</p>
        <p><strong>Total Construction Time:</strong> ${totalConstructionTime.toLocaleString()} days</p>

        <br><h3>Breakdown of Material Costs (Estimated)</h3><br>
        <p>Cement (16.4%): ${cementCost.toLocaleString()} BDT</p>
        <p>Sand (12.3%): ${sandCost.toLocaleString()} BDT</p>
        <p>Aggregate (7.4%): ${aggregateCost.toLocaleString()} BDT</p>
        <p>Steel (24.6%): ${steelCost.toLocaleString()} BDT</p>
        <p>Finishers (16.5%): ${finishersCost.toLocaleString()} BDT</p>
        <p>Fittings (22.8%): ${fittingsCost.toLocaleString()} BDT</p>

        <br><h3>Breakdown of Additional Costs (Estimated)</h3><br>
        <p>Architectural and Design Fees: ${architecturalFee.toLocaleString()} BDT</p>
        <p>Government Permits: ${governmentPermits.toLocaleString()} BDT</p>
        <p>Soil Testing and Site Preparation: ${soilTestingCost.toLocaleString()} BDT</p>
        <p>Water and Electrical Connections: ${waterElectricityCost.toLocaleString()} BDT</p>
        <p>Landscaping and Exterior Work: ${landscapingCost.toLocaleString()} BDT</p>
        <p>Insurance: ${insuranceCost.toLocaleString()} BDT</p>
        <p>Security and Supervision Costs: ${securityCost.toLocaleString()} BDT</p>

        <br><h3>Breakdown of Construction Time (Estimated)</h3><br>
        <p>Home Design & Approval: ${timeForDesignApproval} days</p>
        <p>Excavation: ${timeForExcavation} days</p>
        <p>Footing & Foundation: ${timeForFoundation} days</p>
        <p>RCC Work (Columns & Slabs): ${timeForRCCWork} days</p>
        <p>Roof Slab: ${timeForRoofSlab} days</p>
        <p>Brickwork & Plastering: ${timeForBrickworkPlastering} days</p>
        <p>Flooring & Tiling: ${timeForFlooringTiling} days</p>
        <p>Electric Wiring: ${timeForElectricWiring} days</p>
        <p>Water Supply & Plumbing: ${timeForPlumbing} days</p>
        <p>Doors Installation: ${timeForDoors} days</p>
    `

    let materialCosts={
        cementCost: cementCost,
        sandCost: sandCost,
        aggregateCost: aggregateCost,
        steelCost: steelCost,
        finishersCost: finishersCost,
        fittingsCost: fittingsCost
    }

    // Call to draw the materials chart
    drawMaterialsChart(materialCosts);
    drawTimeChart(totalConstructionTime, floors);
}

function drawMaterialsChart(materialCosts) {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(function() {
        const data = google.visualization.arrayToDataTable([
            ['Material', 'Cost'],
            ['Cement', materialCosts.cementCost],
            ['Sand', materialCosts.sandCost],
            ['Aggregate', materialCosts.aggregateCost],
            ['Steel', materialCosts.steelCost],
            ['Finishers', materialCosts.finishersCost],
            ['Fittings', materialCosts.fittingsCost]
        ]);

        const options = {
            title: 'Material Cost Breakdown',
            is3D: true
        };

        const chart = new google.visualization.PieChart(document.getElementById('materialsChart'));
        chart.draw(data, options);
    });
}

function drawTimeChart(totalConstructionTime, floors) {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(function() {
        const data = google.visualization.arrayToDataTable([
            ['Task', 'Days'],
            ['Design Approval', 45],
            ['Excavation', 15],
            ['Foundation', 40],
            ['RCC Work', 15 * floors],
            ['Roof Slab', 30 * floors],
            ['Brickwork', 7 * floors],
            ['Flooring', 15 * floors],
            ['Electric Wiring', 14 * floors],
            ['Plumbing', 18 * floors],
            ['Doors', 15 * floors]
        ]);

        const options = {
            title: 'Construction Time Estimate',
            hAxis: { title: 'Days' },
            vAxis: { title: 'Tasks' },
            legend: 'none'
        };

        const chart = new google.visualization.BarChart(document.getElementById('timeChart'));
        chart.draw(data, options);
    });
}



