import React, { memo } from 'react';
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Placeholder from "@tiptap/extension-placeholder"
import Underline from "@tiptap/extension-underline"
import Link from "@tiptap/extension-link"
import { useState } from "react"
import "./styles.scss"
import Toolbar from './Toolbar';

export default function TextEditor({message, setMessage}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Start typing...",
      }),
      Underline,
      Link.configure({
        openOnClick: false,
      }),
    ],
    message,
    onUpdate: ({ editor }) => {
      setMessage(editor.getHTML())
    },
  })

  return (
    <div className="text-editor">
      <Toolbar editor={editor} />
      <div className="editor-content">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
