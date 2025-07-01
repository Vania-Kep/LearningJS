//Problem to solve
type Padding = 'small' | 'medium' | 'large' | (string & {});

function getPadding(padding: Padding): string {
    switch (padding) {
        case 'small':
            return '5px';
        case 'medium':
            return '10px';
        case 'large':
            return '15px';
        default:
            return padding; // Return the string as is for any other value
    }
}


let padding: Padding;

padding = 'small'; // 5px
padding = '8px'; // 8px
padding = '';