import SongInfo from "../type/SongInfo"
import styled from "styled-components"

type SongInfoProps = {
	songInfo: SongInfo
}

const InfoBox = styled.div`
	display: flex;

	article {
		display:flex;
		flex-direction:column;
		
		margin-left: 16px;
	}
`

const AlbumImg = styled.img`
	width: 150px;
	height: 150px;
`

const SongInfoBox: React.FC<SongInfoProps> = ({songInfo}) => {
	return (
		<InfoBox>
			<AlbumImg src={`${songInfo.image_url}`} alt="album" />
			<article>
				<h1>
					{`${songInfo.artists} - ${songInfo.song_name}`}
				</h1>
				<h2>
					{`Album name: ${songInfo.album_name}`}
				</h2>
			</article>
		</InfoBox>
	)
}

export default SongInfoBox
