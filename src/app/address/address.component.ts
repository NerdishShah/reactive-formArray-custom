import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { JsonEditorComponent, JsonEditorOptions } from "ang-jsoneditor";

@Component({
  selector: "address",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.css"]
})
export class AddressComponent implements OnInit {
  @Input("group")
  public adressForm: FormGroup;

  public editorOptions: JsonEditorOptions;
  public data: any;
  @ViewChild(JsonEditorComponent, { static: true }) editor: JsonEditorComponent;

  constructor() {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ["code", "text", "tree", "view"]; // set all allowed modes
    //this.options.mode = 'code'; //set only one mode

    
  }

  ngOnInit() {}
}
