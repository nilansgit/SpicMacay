const images = import.meta.glob(
  "../assets/images/teamphotos/*.png",
  { eager: true }
);


const getImage = (num) =>
  images[`../assets/images/teamphotos/${num}.png`]?.default ?? getImage(0);




export const TEAM_DATA = [
  { id: 1, name: "Vikram Sudhakar", role: "President", year: "core", image: getImage(2) },
  { id: 2, name: "Swati V. Bhat", role: "Convener", year: "core", image: getImage(3) },
  { id: 3, name: "Rahul N C", role: "Joint Convener", year: "core", image: getImage(4) },
  { id: 4, name: "H Chetan Reddy", role: "Joint Secretary", year: "core", image: getImage(5) },
  { id: 5, name: "Roshan Warrier", role: "Joint Secretary", year: "core", image: getImage(6) },
  { id: 6, name: "Kannan", role: "Head of Relations", year: "core", image: getImage(7) },
  { id: 7, name: "Kannika", role: "Head Coordinator", year: "core", image: getImage(8) },
  { id: 8, name: "Rishabh", role: "Secretary", year: "core", image: getImage(9) },
  { id: 9, name: "Lipi Mohan", role: "Treasurer", year: "core", image: getImage(10) },
  { id: 10, name: "Anvitha K M", role: "Joint Treasurer", year: "core", image: getImage(11) },
  { id: 11, name: "Sree Harshini", role: "Media and Design Head", year: "core", image: getImage(12) },
  { id: 12, name: "U N Shyam Pramod", role: "Artist Coordinator", year: "core", image: getImage(13) },
  { id: 13, name: "Sowparnika Naik S", role: "Artist Coordinator", year: "core", image: getImage(14) },
  { id: 14, name: "Sivaram Kandula", role: "Publicity Coordinator", year: "core", image: getImage(15) },
  { id: 15, name: "Sambhav", role: "Publicity Coordinator", year: "core", image: getImage(16) },
  { id: 16, name: "Varsha Shetty", role: "Publicity Coordinator", year: "core", image: getImage(17) },
  { id: 17, name: "Siddhartha Reddy", role: "Institute Coordinator", year: "core", image: getImage(18) },
  { id: 18, name: "Preran P", role: "Institute Coordinator", year: "core", image: getImage(19) },
  { id: 19, name: "Ashmita Das", role: "Design and Media Coordinator", year: "core", image: getImage(20) },
  { id: 20, name: "Madhumitha", role: "Design and Media Coordinator", year: "core", image: getImage(21) },
  { id: 21, name: "Sahasra Pulumati", role: "Design and Media Coordinator", year: "core", image: getImage(22) },
  { id: 22, name: "Ram Rithesh Reddy", role: "Marketing Coordinator", year: "core", image: getImage(23) },
  { id: 23, name: "Vinit Kumar", role: "Marketing Coordinator", year: "core", image: getImage(24) },
];



