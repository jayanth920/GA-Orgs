# Payroll Exercise

### Instructions

Using a TDD approach and object oriented best practices, parse the given CSV file of employee data with the goal of generating a monthly payroll report based on the following rules:

Executive: payroll = salary + 20% of salary as bonus

Sales Manager: payroll = salary + 10% of salary bonus + 15% commission on sales

Sales Associate: payroll = salary + 5% of salary as bonus + 10% commission on sales

Engineer: payroll = salary + 5% of salary as bonus

#### Your program should give a report with the following format:

    Position Monthly Payroll Report

    Executive

    Salary: $0.00
    Bonus: $0.00

    Management

    Salary: $0.00
    Commission: $0.00
    Bonus: $0.00

    Sales

    Salary: $0.00
    Commission: $0.00
    Bonus: $0.00

    Engineering

    Salary: $0.00
    Bonus: $0.00

    Total Company Monthly Payroll Report

    Total Salary: $0.00
    Total Bonus: $0.00
    Total Commission: $0.00
