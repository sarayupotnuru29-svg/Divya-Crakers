// 1. Import all local assets
import SoundRocket2 from '../../assets/2-sound-rocket.png';
import SoundRocket3 from '../../assets/3-sound-rocket.png';
import Shots12 from '../../assets/12-shots.png';
import ColorShots15 from '../../assets/15-color-shots.png';
import MaxShots60 from '../../assets/60-max-shots.png';
import Shots100 from '../../assets/100-shots.png';
import Shots120 from '../../assets/120-shots.png';
import MulticolorShots240 from '../../assets/240-multicolor-shots.png';
import MulticolorShots520 from '../../assets/520-multi-colour-shots.png';
import AerialFancy from '../../assets/aerial-fancy.png';
import ColourfulPeacock from '../../assets/colourful-peacock.png';
import DigitalGarlands from '../../assets/digital-garlands.png';
import FlowerPots from '../../assets/flower-pots.png';
import Fountains from '../../assets/fountains.png';
import HandShots from '../../assets/hand-shots.png';
import IplSetout from '../../assets/ipl-setout.png';
import KidsSpecial from '../../assets/kids-special.png';
import LunaRocket from '../../assets/luna-rocket.png';
import ManPasand from '../../assets/man-pasand-25.png';
import Naruto30Shots from '../../assets/naruto-30-shots.png';
import Peacock30 from '../../assets/peacock-30.png';
import Pencils from '../../assets/pencils.png';
import PremiumFancy from '../../assets/premium-fancy.png';
import RocketsCategory from '../../assets/rockets-category.png';
import ShowTime from '../../assets/show-time.png';
import SoundCrackers from '../../assets/sound-crackers.png';
import Sparklers from '../../assets/sparklers.png';
import Spinners from '../../assets/spinners.png';
import BigBang from '../../assets/big-bang-racing-colors.png';
import KaraokeNight from '../../assets/karaoke-night.png';
import Kidsfountain from '../../assets/kids-fountain.png';
import tencmsparkler from '../../assets/10cm-sparkler.png';
import twelevcmsparkler from '../../assets/12cm-sparkler.png';
import fifteencmsparkler from '../../assets/15cm-sparkler.png';
import thirtycmsparkler from '../../assets/30cm-sparkler.png';
import sevencmsparkler from '../../assets/7cm-sparkler.png';
import coloursparkler from '../../assets/colour-sparkler.png';
import umberallasparkler from '../../assets/umberalla-sparkler.png';
import spinnerspecial from '../../assets/spinner-special.png';
import chakkarbig from '../../assets/chakkar-big.png';
import giantwheels from '../../assets/giant-wheel.png';
import spinnerdeluxe from '../../assets/spinner-delxue.png';
import spinnerspecialbox from '../../assets/spinner-special-box.png';
import spinnerxl from '../../assets/spinner-xl.png';
import superchakkarsdeluxe from '../../assets/super-chakkars-deluxe.png';
import wirechakkarfireworks from '../../assets/Wire-Chakkar-fireworks-with-sparklers.png';
import twelvestep from '../../assets/12-step.png';
import fourinchpipe from '../../assets/4-inch-pipe.png';
import fiveinchpipe from '../../assets/5-inch-pipe.png';
import doubleball from '../../assets/double-ball-3.5-pipe.png';
import tenthousandmm from '../../assets/10k.png';
import thousandmm from '../../assets/1k.png';
import twothousandmm from '../../assets/2k.png';
import fivethousandmm from '../../assets/5k.png';
import thousandspecial from '../../assets/1k-special.png';
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  // Row 1
  { id: '1', name: '2 Sound Rocket', price: 150, category: 'Rockets', image: SoundRocket2 },
  { id: '2', name: '3 Sound Rocket', price: 200, category: 'Rockets', image: SoundRocket3 },
  { id: '3', name: '12 Shots', price: 350, category: 'Shots', image: Shots12 },
  { id: '4', name: '15 Color Shots', price: 400, category: 'Shots', image: ColorShots15 },

  // Row 2
  { id: '5', name: '60 Max Shots', price: 850, category: 'Shots', image: MaxShots60 },
  { id: '6', name: '100 Shots', price: 1200, category: 'Shots', image: Shots100 },
  { id: '7', name: '120 Shots', price: 1500, category: 'Shots', image: Shots120 },
  { id: '8', name: '240 Multicolor Shots', price: 2800, category: 'Shots', image: MulticolorShots240 },

  // Row 3
  { id: '9', name: '520 Multi Colour Shots', price: 5500, category: 'Shots', image: MulticolorShots520 },
  { id: '10', name: 'Aerial Fancy', price: 1800, category: 'Fancy', image: AerialFancy },
  { id: '11', name: 'Colourful Peacock', price: 600, category: 'Fancy', image: ColourfulPeacock },
  { id: '12', name: 'Digital Garlands', price: 450, category: 'Garlands', image: DigitalGarlands },

  // Row 4
  { id: '13', name: 'Flower Pots', price: 250, category: 'Flower Pots', image: FlowerPots },
  // { id: '14', name: 'Fountains', price: 300, category: 'Fountains', image: Fountains },
  { id: '15', name: 'Hand Shots', price: 180, category: 'Hand Items', image: HandShots },
  { id: '16', name: 'IPL Setout', price: 2500, category: 'Setouts', image: IplSetout },

  // Row 5
  // { id: '17', name: 'Kids Special', price: 350, category: 'Kids', image: KidsSpecial },
  { id: '18', name: 'Luna Rocket', price: 120, category: 'Rockets', image: LunaRocket },
  { id: '19', name: 'Man Pasand 25 Shots', price: 500, category: 'Fancy', image: ManPasand },
  { id: '20', name: 'Naruto 30 Shots', price: 650, category: 'Shots', image: Naruto30Shots },

  // Row 6
  { id: '21', name: 'Peacock 30 Shots', price: 700, category: 'Fancy', image: Peacock30 },
  // { id: '22', name: 'Pencils', price: 80, category: 'Kids', image: Pencils },
  // { id: '23', name: 'Premium Fancy', price: 2200, category: 'Fancy', image: PremiumFancy },
  { id: '24', name: 'Rockets Category', price: 400, category: 'Rockets', image: RocketsCategory },

  // Row 7
  { id: '25', name: 'Show Time', price: 3500, category: 'Premium', image: ShowTime },
  // { id: '26', name: 'Sound Crackers', price: 550, category: 'Sound', image: SoundCrackers },
  // { id: '27', name: 'Sparklers', price: 100, category: 'Sparklers', image: Sparklers },
  // { id: '28', name: 'Spinners', price: 150, category: 'Spinners', image: Spinners },

  // Row 8
  { id: '29', name: 'Big Bang Racing Colours', price: 3500, category: 'Fountains', image: BigBang },
  { id: '30', name: 'Karaoke Night', price: 3500, category: 'Fountains', image: KaraokeNight},
  { id: '31', name: 'Kids Fountain', price: 3500, category: 'Kids', image: Kidsfountain},
  { id: '32', name: '10cm Sparkler', price: 3500, category: 'Sparklers', image: tencmsparkler},  
  
  //Row 9
  { id: '33', name: '12cm Sparkler', price: 3500, category: 'Sparklers', image: twelevcmsparkler},
  { id: '34', name: '15cm Sparkler', price: 3500, category: 'Sparklers', image: fifteencmsparkler},
  { id: '35', name: '30cm Sparkler', price: 3500, category: 'Sparklers', image: thirtycmsparkler}, 
  { id: '36', name: '7cm Sparkler', price: 3500, category: 'Sparklers', image: sevencmsparkler},    
  
  //Row 10
  { id: '37', name: 'Colour Sparkler', price: 3500, category: 'Sparklers', image: coloursparkler},   
  { id: '38', name: 'Umberalla Sparkler', price: 3500, category: 'Sparklers', image: umberallasparkler},
  { id: '39', name: 'Spinner Special', price: 3500, category: 'Spinners', image: spinnerspecial},
  { id: '40', name: 'Chakkar Big', price: 3500, category: 'Spinners', image: chakkarbig}, 
  
  //Row 11
  { id: '41', name: 'Giant Wheels', price: 3500, category: 'Spinners', image: giantwheels},
  { id: '42', name: 'Spinner Deluxe', price: 3500, category: 'Spinners', image: spinnerdeluxe}, 
  { id: '43', name: 'Spinner Special Box', price: 3500, category: 'Spinners', image: spinnerspecialbox},
  { id: '44', name: 'Spinner XL', price: 3500, category: 'Spinners', image: spinnerxl},
  
  //Row 12
  { id: '45', name: 'Super Chakkars Deluxe', price: 3500, category: 'Spinners', image: superchakkarsdeluxe},
  { id: '46', name: 'Wire Chakkar Fireworks With Sparklers', price: 3500, category: 'Spinners', image: wirechakkarfireworks},
  { id: '47', name: '12 Step multi Colour Shots', price: 1800, category: 'Fancy', image: twelvestep }, 
  { id: '48', name: '4 Inch Pipe Fireworks', price: 1800, category: 'Fancy', image: fourinchpipe }, 
  
  //Row 13
  { id: '49', name: '5 Inch Pipe Fireworks', price: 1800, category: 'Fancy', image: fiveinchpipe},
  { id: '50', name: 'Double Ball 2 Step Series', price: 1800, category: 'Fancy', image: doubleball },
  { id: '55', name: '1000 mm', price: 650, category: 'Sound', image: thousandmm},
  { id: '52', name: '1000 special', price: 650, category: 'Sound', image: thousandspecial },

  //Row 14
  { id: '53', name: '2000 mm', price: 650, category: 'Sound', image: twothousandmm},
  { id: '54', name: '5000 mm', price: 650, category: 'Sound', image: fivethousandmm },
  { id: '51', name: '10000 mm', price: 650, category: 'Sound', image: tenthousandmm},
];