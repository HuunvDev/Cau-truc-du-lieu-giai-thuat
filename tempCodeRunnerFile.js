const arr1 = [1, 4, 2, 6, 5, 96, 46, 24, 35, 11];
function partition(arr, left, right) {
    const mid = left + Math.trunc((right - left) / 2);
    const pivot = arr[mid];
    let i = left;
    let j = right;
    while (i <= j) {
        while (arr[i] < pivot) i++; //nếu chạy từ đầu tới điểm giữa mà vẫn bé hơn thì tăng lên tới khi nào lớn hơn thi dừng ở đó
        while (arr[i] > pivot) j--; //nếu chạy từ cuối tới điểm giữa mà vẫn lớn hơn thì giảm tới khi nào bé hơn thi dừng ở đó
        if (i < j) {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        i++;
        j--;
    }
    return i;
}
function quickSort(arr, left, right) {
    if (left >= right) return arr;

    const pivotPosition = partition(arr, left, right); //hàm này là để chọn ra điểm giữa
    quickSort(arr, left, pivotPosition - 1); //thực hiện sắp xếp bên trái pivot
    quickSort(arr, pivotPosition, right); //thực hiện sắp xếp bên phải pivot

    return arr;
}
console.log(quickSort(arr1, 0, 9));