
export function ContactPage() {
    const element = document.createElement('div')
    const book = document.createElement('h2')
    book.innerHTML = 'Book your rervation with us'; 
    book.setAttribute('id', 'bookTitle')

    const bookPhone = document.createElement('p'); 
    bookPhone.innerHTML = 'Call 1 (915) 875 - 9663'; 
    element.appendChild(book);
    element.appendChild(bookPhone); 

    const inquiries = document.createElement('h2'); 
    inquiries.setAttribute('id', 'bookTitle'); 
    inquiries.innerHTML = 'For inquries, reach us <br />with the following contact information'; 
    const info = document.createElement('p');
    info.innerHTML = "1 (907) 655-4944<br /><br />" + "Tommy's<br />" + "5264 Sleepy Apple Grove, <br />" + "Zinzer, Connecticut, 06979"; 
    element.appendChild(inquiries);
    element.appendChild(info); 

    return element; 
}