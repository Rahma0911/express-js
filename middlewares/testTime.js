
const testTime = (req, resp, next) => {
    const date = new Date();
    const hour = date.getHours();
    const day = date.getDay();
    if (((hour >= 9) && (hour <= 17)) && ((day >= 1)&&(day <= 5))) {
        return next();
    }
    return resp.status(400).send("Ooups! <br></br> (Working hours: Monday to Friday,  from 9h to 17h)");
};
export default testTime;