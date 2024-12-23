import { Component } from '@angular/core';
import { ShapesService } from '../services/shapes.service';
import { Shape } from '../models/shape';

@Component({
  selector: 'app-shape',
  imports: [],
  templateUrl: './shape.component.html',
  styleUrl: './shape.component.css'
})
export class ShapeComponent {

shapes: Shape[]=[];

  constructor(private shapeService: ShapesService){}



ngOnInit(): void {

  this.shapeService.getShapes().subscribe(data => this.shapes = data);
}

popupText: string | null = null;

showPopup(text: string | undefined): void {
  this.popupText = text || null;
}

getRectangleStyle(shape: Shape) {
  return {
    position: 'absolute',
    top: `${shape.positionY}px`,
    left: `${shape.positionX}px`,
    width: `${shape.width}px`,
    height: `${shape.height}px`,
    border: '1px solid black',
    // backgroundColor: 'white',  !! dans la consigne mais ne permet pas l'affichage du portrait complet
    backgroundColor: ''
  };
}

getCircleStyle(shape: Shape) {
  return {
    position: 'absolute',
    top: `${shape.positionY}px`,
    left: `${shape.positionX}px`,
    width: `${shape.width}px`,
    height: `${shape.width}px`, 
    border: '1px solid black',
    borderRadius: '50%',
    // backgroundColor: 'white',  !! dans la consigne mais ne permet pas l'affichage du portrait complet
    backgroundColor: ''
  };
}

getTextStyle(shape: Shape) {
  return {
    position: 'absolute',
    top: `${shape.positionY}px`,
    left: `${shape.positionX}px`,
    fontSize: '40px',
    fontFamily: 'Arial',
    textAlign: 'center' 
  };
}




}
