/**
 * @fileoverview Modal support patch for Blockly.
 *
 * @license Copyright 2016 The Coding with Chrome Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author mbordihn@google.com (Markus Bordihn)
 * 
 * NOTE: taken from https://github.com/google/coding-with-chrome/blob/master/patches/blockly/modal_support_patch.js
 * Modified by Go Frendi for goblock
 */


/**
 * Event handler for a change in variable name.
 * Special case the 'New variable...' and 'Rename variable...' options.
 * In both of these special cases, prompt the user for a new name.
 * @param {string} text The selected dropdown menu option.
 * @return {null|undefined|string} An acceptable new variable name, or null if
 *     change is to be either aborted (cancel button) or has been already
 *     handled (rename), or undefined if an existing variable was chosen.
 */
Blockly.FieldVariable.prototype.classValidator = function(text) {
    var workspace = this.sourceBlock_.workspace;
    var newVarName = Blockly.Variables.generateUniqueName(workspace);
    var oldVar = this.getText();
    var callbackFunc = function(variable_name) {
        Blockly.hideChaff();
        if (!variable_name) {
            return;
        }
        // Merge runs of whitespace.  Strip leading and trailing whitespace.
        // Beyond this, all names are legal.
        variable_name = variable_name
            .replace(/[\s\xa0]+/g, ' ')
            .replace(/^ | $/g, '');
        if (!variable_name ||
                variable_name == Blockly.Msg.RENAME_VARIABLE ||
        variable_name == Blockly.Msg.NEW_VARIABLE) {
      // Ok, not ALL names are legal...
      return;
    }

    if (text == Blockly.Msg.RENAME_VARIABLE) {
      Blockly.Variables.renameVariable(oldVar, variable_name, workspace);
    } else if (text == Blockly.Msg.NEW_VARIABLE) {
      Blockly.Variables.renameVariable(newVarName, variable_name,
        workspace);
    }
  };
  
  
  if (text == Blockly.Msg.RENAME_VARIABLE) {
    window.prompt(Blockly.Msg.RENAME_VARIABLE_TITLE.replace('%1', oldVar),
        oldVar, callbackFunc, text);
    return null;
  } else if (text == Blockly.Msg.NEW_VARIABLE) {
    window.setTimeout(function() {
      window.prompt(Blockly.Msg.NEW_VARIABLE_TITLE, newVarName, callbackFunc,
          text);
    }, 100);
    return newVarName;
  }
  return undefined;
};
