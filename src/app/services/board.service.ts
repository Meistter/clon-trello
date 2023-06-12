import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { checkToken } from '@interceptors/token.interceptor';
import { User } from '@models/user.model';
import { Board } from '@models/board.model';
import { Card } from '@models/card.model';
@Injectable({
  providedIn: 'root'
})
export class BoardService {

  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}
// en este tipado le estamos diciendo es que el id use el tipo definido en el id del modelo de Board
  getBoards(id: Board['id']) {
    return this.http.get<Board[]>(`${this.apiUrl}/api/v1/boards/${id}`, {
      context: checkToken(),
    });
  }
  getPosition(cards: Card[], currentIndex: number){
    console.log(cards, currentIndex);
    
    const lastIndex = cards.length - 1
  if (cards.length ===1){
    // Significa que es nueva la card porq esta sola en la lista
    return 'is new'
  }
  if (cards.length > 1 && currentIndex ===0){
    return 'is the top'
  }  
  if(cards.length > 2 && currentIndex > 0 && currentIndex < lastIndex){
    return 'is the middle'
  }
  if(cards.length > 1 && currentIndex == lastIndex){
    return 'is the bottom'
  } 
  return 'nada'
   
  }
}
