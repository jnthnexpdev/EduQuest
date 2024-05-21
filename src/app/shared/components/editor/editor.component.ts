import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [FormsModule, FroalaEditorModule, FroalaViewModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {
  editorContent: string = '';
  
  public options = {
    placeholderText: 'Escribe tu pregunta...',
  };
}