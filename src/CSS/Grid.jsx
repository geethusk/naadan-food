import "./style.css"
import soldierImage from  "../assets/icons/chess-soldier.svg"
import soldierImageBlack from "../assets/icons/chess-pawn-solid.svg"
import rookWhite from "../assets/icons/rook.svg"
import rookBlack from "../assets/icons/rook1.svg"
import whiteKnight from "../assets/icons/chessKnight.svg"
import blackKnight from "../assets/icons/chessKnight1.svg"
import whiteBishap from "../assets/icons/bishap.svg"
import blackBishap from "../assets/icons/bishap1.svg"
import whiteKing from "../assets/icons/king.svg"
import blackKing from "../assets/icons/king1.svg"
import whiteQueen from "../assets/icons/queen.svg"
import blackQueen from "../assets/icons/queen2.svg"
import { useState } from "react/cjs/react.development"

const chessInitialState=[
    [
        {
            currentPiece:rookWhite
        },

        {
           currentPiece:whiteKnight 
        },

        {
            currentPiece:whiteBishap
        },

        {
            currentPiece:whiteKing
        },

        {
            currentPiece:whiteQueen
        },

        {
            currentPiece:whiteBishap
        },

        {
            currentPiece:whiteKnight 
        },

        {
            currentPiece:rookWhite
        },
],
    [
    ...[...Array(8)].map(()=>{
      return{
          currentPiece:soldierImage
        }
        })
    ],

    ...[...Array(4)].map(()=>{
        return[...Array(8)].map(()=>{
            return{
                currentPiece:null
            }
        })
    }),
  
    [
    ...[...Array(8)].map(()=>{
        return{
            currentPiece:soldierImageBlack
        }
        })
],
[
    {
        currentPiece:rookBlack
    },

    {
        currentPiece:blackKnight
    },

    {
        currentPiece:blackBishap
    },

    {
        currentPiece:blackKing
    },

    {
        currentPiece:blackQueen
    },

    {
        currentPiece:blackBishap 
    },

    {
        currentPiece:blackKnight  
    },

    {
        currentPiece:rookBlack
    },
 ],
]


const Grid = () => {
    // console.log(chessState);
    const [chessState,setChessState]=useState(chessInitialState)
    const[activeColumn,setActiveColumn]=useState([null,null])
    const movePiece=(i,j,x,y)=>{
        setChessState(
            prev=>{
                let newState=[...prev]
                let newColumn=[...newState[i]]
                let initialColumn=[...newState[x]]

                newColumn[j]=prev[x][y]
                
                initialColumn[y]={
                    currentPiece:null 
                }

                
                newState[i]=newColumn
                newState[x]=initialColumn
                return newState;
            }
        )
    }
    return (
        <div className="grid-container">
            {chessState.map((currentColumn,i)=>{
                return currentColumn.map(({currentPiece},j)=>{
                    return(
                    <div style={
                        {
                        backgroundColor: (i + j) % 2 ? "#954838" : "white",
                        border:activeColumn[0]===i && activeColumn[1]===j && "solid 3px #00f"
                    }
                    }
                    onClick={()=>{
                        if(currentPiece){
                            setActiveColumn([i,j])
                        }else{
                            if(activeColumn[0]===null) return
                            movePiece(i,j,activeColumn[0],activeColumn[1])
                            setActiveColumn([null,null])  
                        }
                    }}
                    >
                        {
                            currentPiece &&
                            <img className="currentPiece" src={currentPiece} className="chess-piece" />
                        }
                        </div>
                    )
            })
            }
            )}

            </div>
     )
}
                      
export default Grid


