export default function Video() {
    return (
        <main>
            <div className="video">
                <video width="300px" height="300px" controls>
                    <source src="Video/video.mp4" type="video/mp4" />
                </video>
            </div>
        </main>
    )
}