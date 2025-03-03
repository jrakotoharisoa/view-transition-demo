export type Venue = {
  imgSrc: string;
  slug: string;
  name: string;
  subname: string;
  description: string;
};

export const venues: Venue[] = [
  {
    slug: "comet-levallois",
    name: "Comet Levallois",
    subname: "Le grand Comet",
    description:
      "Derrière une façade classée néo-gothique du XIXe siècle, au cœur d’un jardin intimiste, ce château à l’ADN britannique cache un hôtel surprenant, acidulé et vitaminé, animé par une équipe aussi excentrique qu’exemplaire. Appropriez-vous ce lieu fait de couleurs et de matières, habité par une galerie de personnages profondément attachants et accueillants.",
    imgSrc:
      "https://res.cloudinary.com/ddyhxyc8l/image/upload/w_1600,h_1067,c_fill,g_auto/v1658133621/booking/comet-levallois/4.jpg",
  },
  {
    slug: "comet-arboretum",
    name: "Comet Arboretum",
    subname: "La Fabrique de la Connaissance",
    description:
      "Entrez dans le plus grand campus en bois massif d’Europe bas carbone sur les bords de Seine, en plein cœur de la verdure. Ce bâtiment industriel réhabilité dans des anciennes papeteries iconiques promet de réveiller les équipes qui s’y réunissent en les plongeant dans un lieu d’antan rêvé.",
    imgSrc:
      "https://res.cloudinary.com/ddyhxyc8l/image/upload/w_1600,h_1067,c_fill,g_auto/v1658133621/booking/comet-arboretum/cover.jpg",
  },
];
