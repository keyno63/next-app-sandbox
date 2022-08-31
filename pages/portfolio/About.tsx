import {NextPage} from "next";
import css from 'styled-jsx/css'

const styles = css`
  .desc {
    padding: 1em 0 0;
  }
  .profile {
    flex-direction: column;
    margin-top: 1em;
  }
`

const About: NextPage = () => {
    return (
        <>
            <style jsx>{styles}</style>
            <section>
                <div className="profile">
                    <div className="disc">
                        <p>
                            職業プログラマーです。
                            <br/>
                            サーバーサイドのWebエンジニアです。
                            <br/>
                            以前はIP電話の交換機のソフトウェア開発をやっていました。
                            <br/>
                            Scalaは全然です。
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
