import RecordState from './RecordState'

interface typeCardVideo {
    id: number,
    title: string,
    ask: string,
    response: string
    record: string,
}

const CardVideo: typeCardVideo[] = [
    {
        id: 1,
        title: "video-1",
        ask: "¿Cual fue tu video favorito durante tu infancia",
        response: "",
        record: RecordState.start

    },
    {

        id: 2,
        title: "video-2",
        ask: "¿Cual fue tu apodo durante tu infancia",
        response: "",
        record: RecordState.start
    },
    {

        id: 3,
        title: "video-3",
        ask: "¿Cual fue tu mascota favorito durante tu infancia",
        response: "",
        record: RecordState.start
    },
    {
        id: 4,
        title: "video-4",
        ask: "¿Cual fue tu colegio durante tu infancia",
        response: "",
        record: RecordState.start

    }
]

export default CardVideo;