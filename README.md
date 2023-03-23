We can make our code run faster by not loading the code that is unnecessary at the moment


To Export named component we do: 
`
const TodaysDay = React.lazy(() => import('./TodaysDay').then(module=>{
    return {default.module.TodaysDay}
}))
`

To wait for some seconds

const wait = (time) => {
    return new Promise(resolve=>{
        setTimeout(resolve, time)
    })
}

`
const TodaysDay = React.lazy(()=>wait(1000).then(() =>import('./TodaysDay')))
`

We also detect if the user is offline or online