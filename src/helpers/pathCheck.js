export const PathCheck = path => {
    switch (path) {
      case '/no/startpage-no':
        return '/no'
      case 'no/startpage-no':
        return 'no'
      case '/sv/startpage-sv':
        return '/sv'
      case 'sv/startpage-sv':
        return 'sv'
      case '/da/startpage-da':
        return '/da'
      case 'da/startpage-da':
        return 'da'
      default:
        return path
    }
  }