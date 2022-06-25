// Your code here
function createEmployeeRecord(employees){
    return{
        firstName: employees[0],
        familyName: employees[1],
        title: employees[2],
        payPerHour:employees[3],
        timeInEvents:[],
        timeOutEvents:[]
    } 
}
    
function createEmployeeRecords(arr){
    return arr.map((records) =>{
            return  createEmployeeRecord(records)
    })
}
    
function createTimeInEvent(emplRecord, dateStamp){
    let [date, hour] = dateStamp.split(' ')
    emplRecord.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    
    return emplRecord
}
    
function  createTimeOutEvent(emplRecord, dateStamp){
    let [date, hour] = dateStamp.split(' ')
    emplRecord.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
        })
    return emplRecord
}
    
function hoursWorkedOnDate(empRec, dates) {
    let timeIn = empRec.timeInEvents.find(event =>
        event.date == dates)
    let timeOut = empRec.timeOutEvents.find(event =>
        event.date == dates)
    let totalTime = (timeOut.hour - timeIn.hour) / 100
    return totalTime;
}

function wagesEarnedOnDate(empRec, dates) {
    let hours = hoursWorkedOnDate(empRec, dates)
    return empRec.payPerHour * hours;
}

function allWagesFor(empRec) {
    return empRec.timeInEvents.reduce((total, event) => {
        return total + wagesEarnedOnDate(empRec, event.date) 
    }, 0)
}

function calculatePayroll(employeeRecord) {
    return employeeRecord.reduce((total, employee) => {
        return total + allWagesFor(employee)
    }, 0)
}
    