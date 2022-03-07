import cv2 
import numpy as np 
import matplotlib.pyplot as plt 
%matplotlib inline 
#reading the image 
image = cv2.imread('index.jpg') 
#converting image to size (100,100,3) 
smaller_image = cv2.resize(image,(100,100),inerpolation='linear') 
#plot the resized image
plt.imshow(smaller_image)
