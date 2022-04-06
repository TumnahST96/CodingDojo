package Cards;

import java.util.ArrayList;

import javax.smartcardio.Card;

public class Deck {
    // Card card = new Card();
    private ArrayList<Card>deckList = new ArrayList<Card>();
    public Deck(){

    }

    public void BuildDeck(){
        String [] suitAr = {"Diamond", "Clubs", "Hearts", "Spades"};
        String [] valueAr = {"Ace", "2","3","4","5","6","7","8","9","10","Jack","Queen","King"};
        
        for(int i=0; i<suitAr.length; i++){
            for(int j=0; j<valueAr.length; j++){
                deckList.add(suitAr[i]+valueAr[j]);
            }
        }
        

    }

    private void setCardName (){
        
    }
}



