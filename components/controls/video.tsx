const VideoController = (props:{
    currentVolume:  number;
    currentSeek:number ;
    totalDurationOfVideo: number;
    handlePlay:any;
    handlePause:any;
    handleSeekChange:any;
    handleVolumeChange:any;
    playing:any;
}) => {
    return (
        <div className="w-full absolute  hover:bg-emerald-100 hover:opacity-70 left-0 opacity-10 top-0 flex flex-col h-64">
            {!props.playing&&<div className="h-12 w-12 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-600" onClick={props.handlePlay}></div>}
            {props.playing&&<div className="h-12 w-12 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-600" onClick={props.handlePause}></div>}
            <div className=" absolute w-full bottom-4 flex px-4">
                <div className="w-4/5 mr-2 h-fit">
                    <div className="text-xs transform translate-y-1/2">-{(props.totalDurationOfVideo-props.currentSeek).toFixed(0)} sec</div>
                    <input min={0} max={props.totalDurationOfVideo} value={props.currentSeek} onInput={(e)=>props.handleSeekChange(e)} className="w-full  video-controller" type={'range'} /></div>
                <div className="w-1/5 ml-2 h-fit">
                    <div className="text-xs transform translate-y-1/2">Volume</div>
                    <input min={0} max={100} value={props.currentVolume} onInput={(e)=>{props.handleVolumeChange(e)}} className="w-full  video-controller" type={'range'} /></div>
            </div>
        </div>
    )
}

export default VideoController