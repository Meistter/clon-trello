import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Dialog } from '@angular/cdk/dialog';
import { TodoDialogComponent } from '@boards/components/todo-dialog/todo-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { ToDo, Column } from '@models/todo.model';
import { BoardService } from '@services/board.service';
import { Board } from '@models/board.model';
import { Card } from '@models/card.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent implements OnInit{
 

  constructor(private dialog: Dialog, private route: ActivatedRoute, private boardService:BoardService) {}

  // board: Board | null = null
  board : any = null
// mala practica

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id')      
      if(id){
        this.getBoard(id)
      }
    })
  }
  drop(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    //Para implementar el algoritmo de trelo necesitamos averiguar 3 cosas, cuando la card es nueva y cuando es movida al top, al medio o abajo
    const rsp = this.boardService.getPosition(event.container.data, event.currentIndex)
    console.log(rsp);
    
    
  }

  addColumn() {
    // this.columns.push({
    //   title: 'New Column',
    //   todos: [],
    // });
  }

  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      data: {
        todo: todo,
      },
    });
    dialogRef.closed.subscribe((output) => {
      if (output) {
        console.log(output);
      }
    });
  }
  private getBoard(id: string){
    this.boardService.getBoards(id).subscribe(board =>{this.board = board, console.log(board);
    })
  }
}
