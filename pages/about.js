import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import TwoColumn from 'components/two-column'
import Image from 'next/legacy/image'
import eyecatch from 'images/about.jpg'

export default function About () {
  return (
    <Container>
      <Hero title='About' subtitle='About development activities' />

      <figure>
        <Image
          src={eyecatch}
          alt=''
          layout='responsive'
          sizes='(min-width: 1152px) 1152px, 100vw'
          priority
          placeholder='blur'
        />
      </figure>
      <TwoColumn>
        <TwoColumn.Main>
          <PostBody>
            <p>
              Cubeが得意とする分野はモノづくりです。３次元から２次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
            </p>
            <h2>モノづくりで目指していること</h2>
            <p>
              モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいことを取り込れながら、ユーザーにマッチした提案を実現することが目標です。たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。
            </p>
            <p>
              単純に形にするだけではなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしています。毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで自分の中にあるモヤモヤを言葉にして「問い」への答えを出していきます。
            </p>
            <h3>新しいことへのチャレンジ</h3>
            <p>
              今までと違うものを作ることで愛着が湧いていきます。そこで興味を持ったことは小さなことでもいいぁら取り入れて、良いものを作れるようにしていきます。小さなヒントから新しいものを生み出すようなモノづくりは、これからも続けていきたいです。
            </p>
          </PostBody>
        </TwoColumn.Main>

        <TwoColumn.Sidebar>
          <Contact />
        </TwoColumn.Sidebar>
      </TwoColumn>
    </Container>
  )
}
