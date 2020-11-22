import Container from './container'

export default function PrideBanner() {
    return(
        <Container>
        <div className="py-6 flex flex-col lg:flex-row justify-between items-center">
          <p>
            <a href='https://www.buildwithpride.org'>Built with 🏳️‍🌈</a> by Murphy Studebaker
          </p>
        </div>
      </Container>
    )
}