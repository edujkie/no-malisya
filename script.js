function convertBinary() {
    const binaryInput = document.getElementById('binaryInput').value.trim();
    if (!binaryInput) {
        document.getElementById('result').textContent = 'Please enter a binary string.';
        return;
    }
    
    // Regular expression to match only valid binary digits (0 and 1)
    const binaryRegex = /^[01\s]+$/;

    // Check if the input contains only 0s, 1s, and spaces
    if (!binaryRegex.test(binaryInput)) {
        document.getElementById('result').textContent = 'Error: Input contains invalid characters. Only 0s and 1s are allowed.';
        return;
    }
    
    const binaryValues = binaryInput.split(/\s+/);
    const text = binaryValues.map(b => {
        try {
            // Ensure each binary string is exactly 8 bits long
            if (b.length !== 8) {
                return '?';
            }
            return String.fromCharCode(parseInt(b, 2));
        } catch {
            return '?';
        }
    }).join('');
    
    // Display error if no valid text was converted
    document.getElementById('result').textContent = text || 'Error: No valid binary input detected.';
}

function resetFields() {
    document.getElementById('binaryInput').value = '';
    document.getElementById('result').textContent = '';
}
