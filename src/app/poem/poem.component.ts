import { Component, OnInit, Input } from '@angular/core';
import {ids, dimensions, titles} from "../../assets/ts";


/**
 * This Componenet is responsable for displaying the final poem and is located on the bottom of the page
 */
@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  template: `{{ message }}`,
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit {

  //The string that contains the poem (decleration)
  poemText:String;
  private poem_index: number;
  ids = ids[0];

  constructor() {
  }

  @Input() set clue(clue: string) { // Update when a clue is clicked
    if (clue != null){
        this.addClue(ids[this.poem_index][clue]["clue"]); // Access the clue, as a String, from within the poem's .ts file
    }
  }

  title: String;
  @Input()
  set index(index: number) { // Update the index when the index is changed
    if (index != null)
    this.poem_index = index;
    this.title = titles[index].toUpperCase();
    this.poemText = new String();
  }

  ngOnInit(): void {
  }

  addClue(text:String){ // Adds a clue to the poemText; called every time a new clue is clicked
    this.poemText+= "\n" + text.toString();
  }



}
