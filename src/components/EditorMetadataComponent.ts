/**
 * Editor Metadata Component - Editor-specific entity data
 * 编辑器元数据组件 - 编辑器特定的实体数据
 */

import { Component } from '@esengine/nova-ecs';
import { component, property } from '@esengine/nova-ecs-editor';

@component({
  displayName: 'Metadata',
  category: 'Core',
  icon: '📝',
  description: 'Editor-specific metadata',
  removable: false,
  addable: false,
  order: 1
})
export class EditorMetadataComponent extends Component {
  @property({ 
    displayName: 'Name', 
    type: 'string', 
    description: 'Entity name' 
  })
  name: string = 'Entity';

  @property({ 
    displayName: 'Tag', 
    type: 'string', 
    description: 'Entity tag' 
  })
  tag: string = '';

  @property({ 
    displayName: 'Layer', 
    type: 'number', 
    description: 'Render layer', 
    min: 0, 
    max: 31 
  })
  layer: number = 0;

  constructor(name: string = 'Entity') {
    super();
    this.name = name;
  }
}