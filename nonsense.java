button.setOnAction((ActionEvent e) -> {
    label.setText(field.getText())
})

public void append(int value) {
    if (size == array.length) {
        resize();
    }
    array[size] = value;
    size++;
}

@Override
default Iterator<E> iterator() {
    throw new UnsupportedOperationException("Unsupported method iterator()");
}

public void infixTraversal() {
    String string = "";
    if (root != null) {
        if (left != null ) {
            string += left.infixTraversal()
        }
        string += value.infixTraversal();
        if (right != null) {
            string += right.infixTraversal();
        }
    }
}

public boolean search(int target) {
    if (value == target) {
        return true;
    }  
    if (left != null && left.search(target)) {
        return true;
    }
    if (right != null && right.search(target)) {
        return true;
    } else {
        return false;
    }
}