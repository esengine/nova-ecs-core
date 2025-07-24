/**
 * Transform Component - Position, rotation and scale
 * Transform组件 - 位置、旋转和缩放
 */

import { Component } from '@esengine/nova-ecs';
import { component, property } from '@esengine/nova-ecs-editor';

@component({
  displayName: 'Transform',
  category: 'Core',
  icon: '🔧',
  description: 'Position, rotation and scale of an object',
  removable: false,
  order: 0
})
export class TransformComponent extends Component {
  @property({ 
    displayName: 'Position', 
    type: 'vector3', 
    description: 'World position' 
  })
  position = { x: 0, y: 0, z: 0 };

  @property({ 
    displayName: 'Rotation', 
    type: 'vector3', 
    description: 'Rotation in degrees' 
  })
  rotation = { x: 0, y: 0, z: 0 };

  @property({ 
    displayName: 'Scale', 
    type: 'vector3', 
    description: 'Scale factors' 
  })
  scale = { x: 1, y: 1, z: 1 };

  constructor() {
    super();
  }
}