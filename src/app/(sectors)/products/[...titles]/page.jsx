
export default function Page({params}) {
    console.log(params)
    return (
        <div>page {params.titles[0]} - {params.titles[1]}</div>
    )
}
