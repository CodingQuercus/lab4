export default function Video() {
    return (
        <main>
            <div className="video">
                <video width="480" height="360" controls>
                    <source src="Video/video.mp4" type="video/mp4" />
                </video>
            </div>
        </main>
    )
}