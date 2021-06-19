import HomeSectionOne from '../../components/sections/homeSectionOne'
import HomeSectionTwo from '../../components/sections/homeSectionTwo'
import floatImage from '../../components/float/floatImage'
import footer from '../../components/footer'
let Home = {
  is_private: false,

  render: async () => {
      let view = `
          <div>
            <h1>Star Trek</div>
            ${HomeSectionOne}
            ${HomeSectionTwo}
            ${footer}
            ${floatImage}
          </div>
      `;

      return view
  },

  after_render: async () => {}
}

export default Home;