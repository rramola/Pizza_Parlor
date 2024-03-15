import Order from "../order/Order";
export default function MyFooter() {
    let message = "";
    let currTime = new Date().getHours();
    if (currTime < 10 || currTime > 22 ) {
        message = "We're closed, we welcome you to return between 10:00 AM and 10:00 PM."
    }
    else {
        message = <Order />
    }
    return (
        <footer className="footer">
            {message}
        </footer>
    )
}