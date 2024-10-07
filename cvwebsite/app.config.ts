// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineAppConfig({
  typography: {
    title: 'TomPecher',
    description: "Tom (Tomáš) Pecher",
    image: {
      src: '/wolfram_icon.png',
      alt: 'my profile picture',
      width: 400,
      height: 300
    },
    header: {
      position: 'left', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        alt: 'typography' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/typography' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Made with Nuxt' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      github: 'tompecher',
    },
  }
})
