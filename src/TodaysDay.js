import { format } from 'date-fns';

const TodaysDay = () => (
    <h4>{format(new Date(), "'Today is a' eeee")}</h4>
)

export default TodaysDay;