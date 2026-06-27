import os
import glob
from PIL import Image

def convert_images(directory):
    # Find all jpg/jpeg files
    jpg_files = glob.glob(os.path.join(directory, '**', '*.jpg'), recursive=True)
    jpeg_files = glob.glob(os.path.join(directory, '**', '*.jpeg'), recursive=True)
    all_files = jpg_files + jpeg_files
    
    count = 0
    for file_path in all_files:
        try:
            with Image.open(file_path) as img:
                webp_path = os.path.splitext(file_path)[0] + '.webp'
                # Check if it's already converted
                if not os.path.exists(webp_path):
                    img.save(webp_path, 'webp', optimize=True, quality=80)
            
            # Delete original file
            os.remove(file_path)
            count += 1
            print(f"Converted and deleted: {file_path}")
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
            
    print(f"Total images converted: {count}")

def update_code(src_directory):
    # Update .jsx, .js, .css files
    extensions = ['*.jsx', '*.js', '*.css']
    files_to_check = []
    for ext in extensions:
        files_to_check.extend(glob.glob(os.path.join(src_directory, '**', ext), recursive=True))
        
    count = 0
    for file_path in files_to_check:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        if '.jpg' in content or '.jpeg' in content:
            # Replace .jpg and .jpeg with .webp
            new_content = content.replace('.jpg', '.webp').replace('.jpeg', '.webp')
            
            # Also handle uppercase extensions just in case
            new_content = new_content.replace('.JPG', '.webp').replace('.JPEG', '.webp')
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            count += 1
            print(f"Updated references in: {file_path}")
            
    print(f"Total files updated: {count}")

if __name__ == "__main__":
    public_images_dir = os.path.join(os.getcwd(), 'public', 'images')
    src_dir = os.path.join(os.getcwd(), 'src')
    
    print("Starting image conversion...")
    convert_images(public_images_dir)
    
    print("\nStarting code update...")
    update_code(src_dir)
    print("\nDone!")
