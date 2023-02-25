import Image from '../assets/projects/image.jpg'
import Vrdiver from '../assets/projects/vrdiver2.jpg'
import Profiler from '../assets/projects/profiler.jpg'
import Tlaloc from '../assets/projects/snapcode-tlaloc.jpg'
import Thesis from '../assets/pdfs/bsc-thesis-daniel-ruiz.pdf'
import TlalocInfo from '../assets/pdfs/tlaloc-vessel-infographic.pdf'
import VRDiverInfo from '../assets/pdfs/vr-diver-infographic.pdf'


const project_template='/project'

export const data=[
    {
        id:1,
        name:"VRdiver",
        image:Vrdiver,
        github:"https://github.com/dahrule/LC_FocusVRProject_1stTerm.git",
        live:"bKUARtgCzFA",
        details:VRDiverInfo,
        tags:"VR | Unity",
    },
    {
        id:2,
        name:"Tlaloc Vessel",
        image:Tlaloc,
        github:"",
        live:"Q_y_VtqyklY",
        details:TlalocInfo,
        tags:"AR | Lens Studio",
    },
    {
        id:3,
        name:"Three Trails of Fantasy",
        image:Image,
        github:"https://github.com/dahrule/ThreeTrialsOfFantasy.git",
        live:"",
        details:"",
        tags:"VR | Multiplayer | Unity",
    },
    {
        id:4,
        name:"Canopy thermo hygro profiler",
        image:Profiler,
        github:Thesis,
        live:"",
        details:"",
        tags:"Data analysis | Arduino",
    },
    

]