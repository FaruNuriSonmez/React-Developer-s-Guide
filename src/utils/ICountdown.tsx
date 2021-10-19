import React from "react";

interface ICountdown {
    date: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const ICountdown = ({ date = 0, hours = 0, minutes = 0, seconds = 0 }: ICountdown) => {


    const CurrentDate = new Date();

    const [countdown, setCountdown] = React.useState<ICountdown>({ date, hours, minutes, seconds });

    const tick = () => {
        setCountdown({
            date: date - CurrentDate.getDate(),
            hours: hours - CurrentDate.getHours(),
            minutes: minutes - CurrentDate.getMinutes(),
            seconds: seconds - CurrentDate.getSeconds()
        })
    }

    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    })

    return (
        <>
            <div id="countdown">
                <ul>
                    <li>
                        <span>{`${countdown.date.toString().padStart(2, '0')}`}
                            <em>days</em>
                        </span>
                    </li>
                    <li>
                        <span>{`${countdown.hours.toString().padStart(2, '0')}`}
                            <em>hours </em>
                        </span>
                    </li>
                    <li>
                        <span>{`${countdown.minutes.toString().padStart(2, '0')}`}
                            <em>minutes</em>
                        </span>
                    </li>
                    <li>
                        <span>{`${countdown.seconds.toString().padStart(2, '0')}`}
                            <em>minutes</em>
                        </span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ICountdown;