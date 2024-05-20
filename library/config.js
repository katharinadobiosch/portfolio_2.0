// /* Add project specific imports here */
// import ProductTile, { productTileVariants } from '../patterns/ProductTile'
// import TeaserVideo, { teaserVideoVariants } from '../patterns/TeaserVideo'
// import TeaserDuo, { teaserDuoVariants } from '../patterns/TeaserDuo'
// import TeaserSingle, { teaserSingleVariants } from '../patterns/TeaserSingle'
// import TeaserGrid, { teaserGridVariants } from '../patterns/TeaserGrid'
// import Reviews, { reviewsVariants } from '../patterns/Reviews'
// import RatingStars, { ratingVariants } from '../patterns/RatingStars'
// import TeaserProducts, {
//   teaserProductsVariants,
// } from '../patterns/TeaserProducts'
// import DiscoverMore, { discoverMoreVariants } from '../patterns/DiscoverMore'
// import MultiColumnText, {
//   multiColumnTextVariants,
// } from '../patterns/MultiColumnText'
// import { ImageWithRichtext } from '../patterns'
// import { imageWithRichtextVariants } from '../patterns/ImageWithRichtext'
// import FormattedPrice, {
//   formattedPriceVariants,
// } from '../patterns/FormattedPrice'
// // import {
// //   addToCartPopupVariants,
// //   AddToCartPopup,
// // } from '../patterns/AddToCartPopup'
// import FullWidthText, { fullWidthTextVariants } from '../patterns/FullWidthText'
// // import Spinner from '../patterns/Spinner'

// import ContactForm, { contactFormVariants } from '../patterns/ContactForm'
// import ContactFormExtended, {
//   contactFormExtendedVariants,
// } from '../patterns/ContactFormExtended'
// import BookDownloads, { BookDownloadsVariants } from '../patterns/BookDownloads'
// import HeroSlideShow, { heroSlideShowVariants } from '../patterns/HeroSlideShow'
// import ReturnLabelLink, {
//   returnLabelLinkVariants,
// } from '../patterns/ReturnLabelLink'
// import ContentVideoProduct, {
//   contentVideoProductVariants,
// } from '../patterns/ContentVideoProduct'
// // import ReviewFormModal, {
// //   reviewFormModalVariants,
// // } from '../patterns/ReviewFormModal'
// // import Modal from '../patterns/Modal'
// // import ReviewSubmitMessageModal from '../patterns/ReviewSubmitMessageModal'
// import EventList, { eventListVariants } from '../patterns/EventList'
// import EventDetail from './examplePages/EventDetail'
// import EventCard, { eventCardVariants } from '../patterns/EventCard'
// /* CLI MARKER - PATTER IMPORT - DO NOT REMOVE */

// export default [
//   {
//     type: 'atom',
//     name: 'Price',
//     component: FormattedPrice,
//     variants: formattedPriceVariants,
//   },
//   {
//     type: 'atom',
//     name: 'Headings',
//     component: Heading,
//     variants: headingVariants,
//   },
//   {
//     type: 'atom',
//     name: 'Copytext',
//     component: Copytext,
//     variants: copytextVariants,
//   },
//   {
//     type: 'atom',
//     name: 'Buttons',
//     component: Button,
//     variants: buttonVariants,
//   },
//   {
//     type: 'molecule',
//     name: 'Dropdown',
//     component: Dropdown,
//     variants: dropdownVariants,
//   },
//   {
//     type: 'molecule',
//     name: 'Product Tile',
//     component: ProductTile,
//     variants: productTileVariants,
//   },
//   // {
//   //   type: 'molecule',
//   //   name: 'Add to Cart Popup',
//   //   component: AddToCartPopup,
//   //   variants: addToCartPopupVariants,
//   // },
//   {
//     type: 'static',
//     name: 'Header',
//     component: Header,
//     variants: headerVariants,
//   },
//   {
//     type: 'static',
//     name: 'Footer',
//     component: Footer,
//     variants: footerVariants,
//   },
//   // {
//   //   type: 'static',
//   //   name: 'Product List',
//   //   component: ProductList,
//   //   variants: productListVariants,
//   // },
//   {
//     type: 'static',
//     name: 'Event List',
//     component: EventList,
//     variants: eventListVariants,
//   },
//   {
//     type: 'static',
//     name: 'Empty Search Result',
//     component: EmptySearchResult,
//     variants: emptySearchResultVariants,
//   },
//   {
//     type: 'static',
//     name: 'Product Information',
//     component: ProductDetailInformation,
//     variants: productDetailInformationVariants,
//   },
//   // {
//   //   type: 'static',
//   //   name: 'Review Form Modal',
//   //   component: ReviewFormModal,
//   //   variants: reviewFormModalVariants,
//   // },
//   // {
//   // type: 'static',
//   // name: 'Breadcrumb',
//   // component: Breadcrumb,
//   // variants: breadcrumbVariants,
//   // },
//   // {
//   // type: 'static',
//   // name: 'Ratings',
//   // component: Ratings,
//   // variants: ratingVariants,
//   // },
//   {
//     type: 'placeable',
//     name: 'Product Placement',
//     component: ProductPlacement,
//     variants: productPlacementVariants,
//   },
//   {
//     type: 'placeable',
//     name: 'Discover More',
//     component: DiscoverMore,
//     variants: discoverMoreVariants,
//   },
//   // {
//   // type: 'placeable',
//   // name: 'Stream Placement',
//   // component: StreamPlacement,
//   // variants: streamPlacementVariants,
//   // },
//   // {
//   // type: 'placeable',
//   // name: 'Discovery Image',
//   // component: DiscoveryImage,
//   // variants: discoveryImageVariants,
//   // },
//   // {
//   // type: 'placeable',
//   // name: 'Promotion',
//   // component: Promotion,
//   // variants: promotionVariants,
//   // },
//   {
//     type: 'placeable',
//     name: 'Teaser (Hero)',
//     component: TeaserHero,
//     variants: teaserHeroVariants,
//   },
//   {
//     type: 'placeable',
//     name: 'Teaser (Video)',
//     component: TeaserVideo,
//     variants: teaserVideoVariants,
//   },
//   {
//     type: 'placeable',
//     name: 'Content Video Product',
//     component: ContentVideoProduct,
//     variants: contentVideoProductVariants,
//   },
//   {
//     type: 'placeable',
//     name: 'Teaser (Grid)',
//     component: TeaserGrid,
//     variants: teaserGridVariants,
//   },
//   {
//     type: 'placeable',
//     name: 'Teaser (Duo)',
//     component: TeaserDuo,
//     variants: teaserDuoVariants,
//   },
//   {
//     type: 'placeable',
//     name: 'Teaser (Single)',
//     component: TeaserSingle,
//     variants: teaserSingleVariants,
//   },
//   {
//     type: 'placeable',
//     name: 'Images with Rich text',
//     component: ImageWithRichtext,
//     variants: imageWithRichtextVariants,
//   },
//   {
//     type: 'static',
//     name: 'Reviews',
//     component: Reviews,
//     variants: reviewsVariants,
//   },
//   {
//     type: 'static',
//     name: 'Rating Stars',
//     component: RatingStars,
//     variants: ratingVariants,
//   },

//   {
//     type: 'placeable',
//     name: 'Teaser (Products)',
//     component: TeaserProducts,
//     variants: teaserProductsVariants,
//   },
//   {
//     type: 'placeable',
//     name: 'Text (mehrspaltig)',
//     component: MultiColumnText,
//     variants: multiColumnTextVariants,
//   },
//   {
//     type: 'placeable',
//     name: 'Full Width Text',
//     component: FullWidthText,
//     variants: fullWidthTextVariants,
//   },
//   {
//     type: 'placeable',
//     name: 'Event Card',
//     component: EventCard,
//     variants: eventCardVariants,
//   },
//   // {
//   //   type: 'placeable',
//   //   name: 'Spinner',
//   //   component: Spinner,
//   //   variants: [{ name: 'Default' }],
//   // },
//   // {
//   // type: 'placeable',
//   // name: 'Contact Form',
//   // component: ContactForm,
//   // variants: contactFormVariants,
//   // },
//   {
//     type: 'placeable',
//     name: 'Contact Form',
//     component: ContactForm,
//     variants: contactFormVariants,
//   },
//   {
//     type: 'placeable',
//     name: 'Extended Contact Form',
//     component: ContactFormExtended,
//     variants: contactFormExtendedVariants,
//   },
//   {
//     type: 'placeable',
//     name: 'Books Download',
//     component: BookDownloads,
//     variants: BookDownloadsVariants,
//   },
//   {
//     type: 'placeable',
//     name: 'Hero Slide Show',
//     component: HeroSlideShow,
//     variants: heroSlideShowVariants,
//   },
//   {
//     type: 'placeable',
//     name: 'Return Label Link',
//     component: ReturnLabelLink,
//     variants: returnLabelLinkVariants,
//   },
//   // {
//   //   name: 'Modal',
//   //   component: Modal,
//   //   type: 'placeable',
//   // },
//   // {
//   //   type: 'placeable',
//   //   name: 'Review Submit Message Modal',
//   //   component: ReviewSubmitMessageModal,
//   // },
//   /* CLI MARKER - PATTERN CONFIG - DO NOT REMOVE */
//   {
//     type: 'page',
//     name: 'Store Page',
//     component: Home,
//     variants: [{ name: 'Home' }],
//   },
//   {
//     type: 'page',
//     name: 'Listing Page',
//     component: Listing,
//     variants: [{ name: 'Listing Page Example' }],
//   },

//   {
//     type: 'page',
//     name: 'Detail Page',
//     component: Detail,
//     variants: [{ name: 'Detail Page Example' }],
//   },

//   {
//     type: 'page',
//     name: 'Cart Page',
//     component: Cart,
//     variants: [{ name: 'Cart Page Example' }],
//   },
//   {
//     type: 'page',
//     name: 'Event Detail Page',
//     component: EventDetail,
//     variants: [{ name: 'Event Detail Page Example' }],
//   },
// ]
