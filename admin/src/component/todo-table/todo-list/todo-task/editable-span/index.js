import React from 'react'

import './styles.scss'

export class EditableSpan extends React.Component {
  constructor(props) {
    super(props)
    this.className = this.props.className;
    this.content = this.props.content;
    this.onEdit = this.props.onEdit;
  }

  render() {
    const className = `editable-span ${this.className}`
    const content = this.content
    const onEdit = (e) => this.onEdit(e.target.innerHTML)

    return (
      <div className={className}>
        <span
            suppressContentEditableWarning
            contentEditable={true}
            onInput={onEdit}
            onBlur={onEdit}>
          {content}
        </span>
      </div>
    )
  }
}